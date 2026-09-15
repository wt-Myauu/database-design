import './MainPage.css';
import Header from './components/Header.jsx';
import banner1 from '../assets/banner1.png';

export default function Mainpage() {
  return (
    <div className="mainpage">
      <Header />

      <main className="mainpage__content">
        <div className="mainpage__hero">
          <div className="mainpage__copy">
            <div className="mainpage__badge">AI 추천</div>
            <h1 className="mainpage__title">
              당신만을 위한
              <span>최적의 견적</span>
            </h1>
            <p className="mainpage__subtitle">
              예산, 용도, 성능까지 분석해 가장 합리적인 조합을 제안합니다.
            </p>
            <button type="button" className="mainpage__cta">
              추천 견적 보기
            </button>
          </div>

          <img
            src={banner1}
            alt="배너 1"
            className="mainpage__banner"
          />
        </div>
        <hr className="mainpage__divider" />
      </main>
    </div>
  );
}