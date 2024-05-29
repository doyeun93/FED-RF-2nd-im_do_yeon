import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    $(".App-header span").hover(
      (e) => { // 오버시
        $(e.currentTarget)
        .stop().animate(
          {
            scale: 1.5,
          },
          500
        );
      },
      (e) => { // 아웃시
        $(e.currentTarget)
        .stop().animate(
          {
            scale: 1,
          },
          500
        );
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <span>
        <img src="https://m.babiluv.com/web/product/big/202101/e6f2158edbaa6b5fb470dc9474ac0ef8.jpg" className="App-logo" alt="logo" />
        </span>
        <p>
          이제 리액트는 내겁니다
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
