import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 md:px-52 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> ABOUT </h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> COMMUNITY </h5>
        <p>Accessibility</p>
        <p>This is a sample site</p>
        <p>It's a pretty clone</p>
        <p>Referrals</p>
        <p>React with NextJS</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST </h5>
        <p>Hey there</p>
        <p>This is </p>
        <p>a NextJS project</p>
        <p>to clone</p>
        <p>Airbnb site</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST </h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>a NextJS project</p>
        <p>Say on Youtube</p>
        <p>Easter eggs</p>
      </div>
    </div>
  );
};

export default Footer;
