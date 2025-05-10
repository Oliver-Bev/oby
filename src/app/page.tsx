"use client";

import Image from "/public/back.jpg";
import { useState, useEffect } from 'react';
import { CircleHelp, MoveLeft, CircleCheck  } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

 useEffect(() => {
  const updateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('pl-PL', { hour12: false }); // Czas w formacie 24-godzinnym
    const date = now
      .toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }) // Gwarantujemy format dd.mm.yyyy
      .replace(/\//g, '.'); // Na wypadek, gdyby przeglądarka zwracała slashe

    setCurrentTime(time);
    setCurrentDate(date);
  };

  updateTime(); // Inicjalizacja od razu
  const interval = setInterval(updateTime, 1000); // Aktualizacja co sekundę

  return () => clearInterval(interval); // Czyszczenie po odmontowaniu
}, []);


  return (
    <div className="centered-div">
      <div className="top">
        <MoveLeft />
        <a id="mdow">mDowód</a>
        <CircleHelp />
      </div>
      <div className="middle">
        <a id="time">Czas: {currentTime} {currentDate}</a>

        <div className="info">
          <div className="info-bottom">
        <CircleCheck className="check" /> Dokument ważny
          </div>
        </div>
      </div>
    </div>
  );
}
