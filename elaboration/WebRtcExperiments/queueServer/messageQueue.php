<?php
	//error_reporting(E_ALL);
	//ini_set('display_errors', 1);

	// allow cross domain ajax call
	header('Access-Control-Allow-Origin: *');

	// store messages as files in $folder as text files
	$folder = dirname(__FILE__).'/queue';
	$file = 'messageQueue';
	$fileType = '.txt';


	/**
	 * find oldest file in queue directory
	 */
	function getOldestFile($directory, $receiverType = null) {
		$oldest = 0; $oldestFile = null;
        if ($handle = opendir($directory)) {
        	while (($entry = readdir($handle)) !== false) {
                 if(is_file($directory.$entry)) {
                 	$typeOk = true;

					// is file for receiver?
                 	if(isset($receiverType)) {
                 		if(strpos($entry,$receiverType) === false) {
                 			$typeOk = false;
                 		}
                 	}

                 	if($typeOk) {
						$fileParts = split('-',$entry);
						if(count($fileParts) >= 2 && isset($fileParts[1])) {
							$timeStamp = intval($fileParts[1]);
							if($oldest == 0) {
								$oldest = $timeStamp;
								$oldestFile = $directory.$entry;
							} else if($timeStamp < $oldest) {
								$oldest = $timeStamp;
								$oldestFile = $directory.$entry;
							}
						}
					}
                 }
            }
        }
        return $oldestFile;
    }


	/**
	 * get oldest message if exist, otherwise return "0"
	 *
	 * call syntax:
	 *	messageQueue.php?getMessage		to get the oldest message
	 *	messageQueue.php?getMessage&receiverType=caller		to get the latest message for "caller"
	 */
	if(isset($_GET["getMessage"])) {
		$file = (isset($_GET["receiverType"])) ? getOldestFile($folder.'/',$_GET["receiverType"]) : getOldestFile($folder.'/');
		if(isset($file) && is_file($file)) {
			echo file_get_contents($file);
			unlink($file);
		} else { echo "0"; }
	}

	/**
	 * store a message to the msg_get_queue
	 *
	 * call syntax:
	 *	messageQueue.php?setMessage=message		to store the message "message" using GET
	 *	messageQueue.php?setMessage=message&receiverType=callee		to store the message "message" for "callee" using GET
	 *	messageQueue.php?setMessage&receiverType=callee		to store a message for "callee" sending in the variable "message" in the body of the POST request
	 */
	if(isset($_GET["setMessage"])) {
		$message;
		if(isset($_GET["receiverType"])) {
			$fileName = $folder.'/'.$_GET["receiverType"].'_'.$file.'-'.round(microtime(true) * 1000).'-message'.$fileType;
		} else {
			$fileName = $folder.'/'.$file.'-'.round(microtime(true) * 1000).'-message'.$fileType;
		}

		if(isset($_POST["message"])) {
			$message = $_POST["message"];
		} else {
			$message = $_GET["setMessage"];
		}

        $fileHandle = fopen($fileName, 'w') or die("fail");
        $state = fwrite($fileHandle,$message);
        fclose($fileHandle);

		if($state === false) {
			echo "fail";
		} else {
			echo "message set";
		}
	}
?>