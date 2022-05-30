
import styles from './Upload.module.css';
import {useState} from "react";

function UploadInput({setFiles}) {


        const [countFiles, setCountFiles] = useState(0);

        const onFileInputChange = (event) => {
            setFiles(Array.from(event.target.files));

            console.log(Array.from(event.target.files))
            setCountFiles(event.target.files.length);
        };


  return (
        <label htmlFor={"name"}>
        <div className={styles.downloadFile}>
        <input
        name={"name"}
        type="file"
        id={"name"}
        multiple
        onChange={onFileInputChange}
        />
    {countFiles ? <span>{`Selected files: ${countFiles}`}</span> : <span>{"upload File"}</span>}
        </div>
        </label>
  );
}

export default UploadInput;
