import { Link, useNavigate } from 'react-router-dom';

const Resume = () => {
  return (
    <div>
      <h2>🌐대외활동🌐</h2>
      <h3>🦁멋쟁이사자처럼 충남대 11기 운영진🦁</h3>
      <p>2023.01 ~</p>
      <h3>교내 어플 동아리 운영진</h3>
      <p>2021.07 ~ 22.12</p>
      <br />
      <h2>🏆prize🏆</h2>
      <h3>충남대학교 공과대학 2021 창의공학 아이디어 캠프 은상</h3>
      <p>2021.12</p>
      <h3>CNU 창의 sw 축전 2021 주니어 창의작품경진대회 장려상</h3>
      <p>2021.12</p>
      <br />
      😀
      <ins>
        <Link to="https://github.com/pkyung">GIT</Link>
      </ins>
      <br />
      😀
      <ins>
        <Link to="https://p-kyung.tistory.com/">BLOG</Link>
      </ins>
    </div>
  );
};

export default Resume;
