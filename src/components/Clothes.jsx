import React from 'react';
import './Clothes.css';
import menPic from '../assets/images/men_pic.avif';
import femalePic from '../assets/images/female_pic.avif';

function Clothes() {
    return (
        <div className="container">
            <h1 className="title">SCLOTHERS</h1>

            <div className="categories">
                <div className="category">
                    <img src={menPic} alt="Men's Fashion" className="category-image" />
                    <div className="category-info">
                        <p className="category-label">GO TO FASHION</p>
                        <h2 className="category-title">MEN</h2>
                    </div>
                </div>


                <div className="category">
                    <img src={femalePic} alt="Women's Fashion" className="category-image" />
                    <div className="category-info">
                        <p className="category-label">GO TO FASHION</p>
                        <h2 className="category-title">WOMEN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clothes;
