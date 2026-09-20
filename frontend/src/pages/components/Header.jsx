import { useState } from 'react';
import './Header.css';
import logoImage from '../../assets/logo.png';

const NAV_ITEMS = ["추천 견적", "견적 검색", "Q&A", "고객지원"];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <div className="header__left">
          <button type="button" className="header__logo" onClick={handleLogoClick} aria-label="홈으로 이동">
            <img src={logoImage} alt="로고" className="header__logo-image" />
          </button>
        </div>

        {/* Nav */}
        <nav aria-label="주요 메뉴" className="header__nav">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a href="#" className="header__nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="header__right">
          <button
            type="button"
            aria-label="검색"
            className="header__icon-btn"
            onClick={() => setIsSearchOpen((open) => !open)}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button type="button" aria-label="장바구니" className="header__icon-btn">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          <button type="button" className="header__login">
            로그인
          </button>
        </div>
      </div>

      <div className={`header__search-panel ${isSearchOpen ? 'open' : ''}`}>
        <div className="header__search-box">
          <input
            type="search"
            className="header__search-input"
            placeholder="AI를 활용한 추천 견적을 확인해 보세요! (예시: 100만원 이하의 사무용 PC 견적 추천해줘)"
          />

          <button type="button" className="header__search-button">
            검색
          </button>
        </div>
      </div>
    </header>
  );
}