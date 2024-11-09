import ProgressBar from 'react-bootstrap/ProgressBar';

function TopProgressBar({ now }) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <ProgressBar now={now} label={`${now}%`} />
      </div>
    );
  }
  
  export default TopProgressBar;