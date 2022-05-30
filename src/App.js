import styles from './App.module.css';
import {useState} from "react";
import UploadInput from "./Components/UploadInput/UploadInput";

import DownloadList from "./Components/DownloadList/downloadList";


function App() {


    const [files, setFiles] = useState([]);

    let List = files.length > 0 ? files.map((el, key) => <DownloadList key={key} el={el}/>) : null


    return (
        <div className={styles.app}>

            <UploadInput setFiles={setFiles}/>
            <ul>
                {List}
            </ul>
        </div>
    );
}

export default App;
