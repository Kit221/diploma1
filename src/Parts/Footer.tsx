import React from 'react';
import './Footer.css';

/**
 * Футер сайта.
 */

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="section">
          <h4 className="sectionTitle">Company</h4>
          <ul className="list">
            <li className="listItem">
              <a href="https://www.last.fm/about " className="link">About Last.fm</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/about/contact " className="link">Contact Us</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/about/jobs " className="link">Jobs</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/features " className="link">Features</a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4 className="sectionTitle">Help</h4>
          <ul className="list">
            <li className="listItem">
              <a href="https://www.last.fm/about/trackmymusic " className="link">Track My Music</a>
            </li>
            <li className="listItem">
              <a href="https://support.last.fm/ " className="link">Community Support</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/help/guidelines " className="link">Community Guidelines</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/help/faq " className="link">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4 className="sectionTitle">Goodies</h4>
          <ul className="list">
            <li className="listItem">
              <a href="https://www.last.fm/about/trackmymusic " className="link">Download Scrobbler</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/api " className="link">Developer API</a>
            </li>
            <li className="listItem">
              <a href="https://www.last.fm/music/+free-music-downloads " className="link">Free Music Downloads</a>
            </li>
            <li className="listItem">
              <a href="https://store.last.fm/ " className="link">Merchandise</a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4 className="sectionTitle">Follow Us</h4>
          <ul className="list">
            <li className="listItem">
              <a href="https://www.facebook.com/lastfm " className="link">Facebook</a>
            </li>
            <li className="listItem">
              <a href="https://x.com/lastfm " className="link">X</a>
            </li>
            <li className="listItem">
              <a href="https://bsky.app/profile/last.fm " className="link">Bluesky</a>
            </li>
            <li className="listItem">
              <a href="https://www.instagram.com/last_fm " className="link">Instagram</a>
            </li>
            <li className="listItem">
              <a href="https://www.youtube.com/user/lastfm " className="link">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">
        <p>English Deutsch Español Français Italiano 日本語 Polski Português Русский Svenska Türkçe 简体中文</p>
        <p>Time zone: Europe/Moscow</p>
      </div>
      
      <ul className="additionalLinks">
        <li><a href="https://www.paramount.com/about/businesses/streaming " className="link1">CBS Interactive</a></li>
        <li><a href="https://www.last.fm/legal/terms " className="link1">Terms of Use</a></li>
        <li><a href="https://privacy.paramount.com/en/policy?r=www.last.fm " className="link1">Privacy Policy</a></li>
        <li><a href="https://www.last.fm/legal " className="link1">Legal Policies</a></li>
        <li><a href="/Cookie Details" className="link1">Cookie Details</a></li>
        <li><a href="https://careers.paramount.com/ " className="link1">Jobs at Paramount</a></li>
        <li><a href="https://www.last.fm/home " className="link1">Last.fm Music</a></li>
      </ul>
    </footer>
  );
};