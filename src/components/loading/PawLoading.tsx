import React from 'react';
import { PawPrint } from 'lucide-react';
import './PawLoading.css';

export default function PawLoading() {
  return (
    <div className="loading-container">
      <PawPrint className="paw-icon" />
    </div>
  );
}