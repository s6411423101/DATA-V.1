"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Define interfaces if needed
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Example functional components
const DesktopNavLinks: React.FC = () => {
  return <div>Desktop Navigation Links</div>;
};

const LogoLink: React.FC = () => {
  return <div>Logo</div>;
};

const MobileMenuButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      {/* Drawer content */}
      <p>Drawer content</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  );
};

export default Navbar;
