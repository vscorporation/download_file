
import styles from './list.module.css';


function DownloadList({el, ...props}) {

  const url = window.URL.createObjectURL(
      new Blob([el]),
  );






  return (
      <li style={styles.list} onClick={()=>console.log(el)}> <a href={url} download={el.name}>{el.name}</a></li>

  );
}

export default DownloadList;
