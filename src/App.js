import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [keyword, setKeyword] = useState('');
    const [color, setColor] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [wallpapers, setWallpapers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWallpapers = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('http://localhost:5000/api/wallpapers', {
                params: { keyword, color, width, height }
            });
            setWallpapers(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.error : 'Something went wrong');
        }
        setLoading(false);
    };

    return (
        <div className="app-container">
            <h1>WhatPaper</h1>
            <div className="input-fields">
                <div>
                    <label>Keyword:</label>
                    <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Color:</label>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div>
                    <label>Width:</label>
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <button onClick={fetchWallpapers} disabled={loading}>
                    {loading ? 'Loading...' : 'Get Wallpapers'}
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className="wallpapers">
                {wallpapers.length > 0 && wallpapers.map((wallpaper) => (
                    <div key={wallpaper.id} className="wallpaper-item">
                        <img
                            src={wallpaper.url}
                            alt={wallpaper.description || 'Wallpaper'}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                marginBottom: '10px',
                            }}
                        />
                        <a
                            href={wallpaper.download_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-link"
                        >
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
