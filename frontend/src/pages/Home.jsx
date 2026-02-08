import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <div>
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">TechKart</div>
                <div className="nav-center">
                    <Link to="/">Home</Link>
                    <a href="#">Laptops</a>
                    <a href="#">Mobiles</a>
                </div>
                <div className="nav-right">
                    <button style={{ background: 'none', border: 'none', fontSize: '20px' }}>🔍 </button> 
                    <button style={{ background: 'none', border: 'none', fontSize: '20px' }}>🛒</button>
                    {username ? (
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <span>Hi, {username}</span>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" style={{ fontWeight: 500 }}>Login</Link>
                            <Link to="/register" className="btn btn-primary">Sign Up</Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Welcome to <span style={{ color: 'var(--primary-color)' }}>TechKart</span></h1>
                    <p>Discover the latest laptops and mobile phones at unbeatable prices. Experience technology like never before with our premium selection.</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Shop Laptops →</button>
                        <button className="btn btn-secondary">Shop Mobiles</button>
                    </div>
                </div>
            </header>

            {/* Shop by Category */}
            <section className="section">
                <h2 className="section-title">Shop by Category</h2>
                <div className="category-grid">
                    <div className="category-card" style={{ background: '#000' }}>
                        <div>
                            <h3>Laptops</h3>
                            <a href="#">Explore Collection →</a>
                        </div>
                    </div>
                    <div className="category-card" style={{ background: '#000' }}>
                        <div>
                            <h3>Mobile Phones</h3>
                            <a href="#">Explore Collection →</a>
                        </div>
                    </div>
                </div>
            </section>-

            {/* Featured Products */}
            <section className="section">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Products</h2>
                    <a href="#" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>View All →</a>
                </div>

                <div className="product-grid">
                    {/* Mock Product 1 */}
                    <div className="product-card">
                        <div className="product-image">💻</div>
                        <div className="product-info">
                            <div className="brand">Apple</div>
                            <h4>MacBook Pro 14 M3</h4>
                            <div style={{ fontSize: '12px', color: '#f59e0b' }}>★ 4.9 (120 reviews)</div>
                            <div className="price"> NPR 1,69,900</div>
                        </div>
                    </div>
                    {/* Mock Product 2 */}
                    <div className="product-card">
                        <div className="product-image">💻</div>
                        <div className="product-info">
                            <div className="brand">Dell</div>
                            <h4>Dell XPS 15</h4>
                            <div style={{ fontSize: '12px', color: '#f59e0b' }}>★ 4.7 (85 reviews)</div>
                            <div className="price"> NPR 1,45,000</div>
                        </div>
                    </div>
                    {/* Mock Product 3 */}
                    <div className="product-card">
                        <div className="product-image">📱</div>
                        <div className="product-info">
                            <div className="brand">Apple</div>
                            <h4>iPhone 15 Pro Max</h4>
                            <div style={{ fontSize: '12px', color: '#f59e0b' }}>★ 4.9 (300 reviews)</div>
                            <div className="price">NPR 1,85,000</div>
                        </div>
                    </div>
                    {/* Mock Product 4 */}
                    <div className="product-card">
                        <div className="product-image">📱</div>
                        <div className="product-info">
                            <div className="brand">Samsung</div>
                            <h4>Samsung Galaxy S24 Ultra</h4>
                            <div style={{ fontSize: '12px', color: '#f59e0b' }}>★ 4.8 (210 reviews)</div>
                            <div className="price">NPR 1,75,000</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="features">
                <div className="feature-item">
                    <div className="icon-box">🚚</div>
                    <h3>Fast Delivery</h3>
                    <p>Free shipping on orders over NPR 50,000. Delivery within 2-3 business days.</p>
                </div>
                <div className="feature-item">
                    <div className="icon-box">🛡️</div>
                    <h3>Secure Warranty</h3>
                    <p>1 year official warranty on all products. Genuine products guaranteed.</p>
                </div>
                <div className="feature-item">
                    <div className="icon-box">💳</div>
                    <h3>Easy Payment</h3>
                    <p>Pay securely via eSewa or choose Cash on Delivery for convenience.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="logo" style={{ color: 'white', marginBottom: '20px' }}>TechKart</div>
                        <p>Your one-stop destination for premium laptops and mobile phones.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <a href="#">Home</a>
                        <a href="#">Laptops</a>
                        <a href="#">Mobiles</a>
                        <a href="#">Cart</a>
                    </div>
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <p>📍 123 Tech Street, Digital City, Pokhara</p>
                        <p>📞 +977 9800000000</p>
                        <p>✉️ support@techkart.com</p>
                    </div>
                    <div className="footer-col">
                        <h3>Stay Updated</h3>
                        <p>Subscribe to our newsletter</p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input type="email" placeholder="Enter your email" style={{ padding: '10px', borderRadius: '4px', border: 'none', width: '100%', background: '#1e293b', color: 'white' }} />
                            <button className="btn btn-primary" style={{ padding: '10px 15px' }}>Join</button>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    © 2025 TechKart. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
