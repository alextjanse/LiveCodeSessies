CREATE TABLE voetbal_data (
    Competitie TEXT NOT NULL,
    Seizoen TEXT NOT NULL,
    Thuisvereniging TEXT NOT NULL,
    Thuisteam TEXT NOT NULL,
    Uitvereniging TEXT NOT NULL,
    Uitteam TEXT NOT NULL,
    Datum TEXT NOT NULL,
    Scheidsrechter TEXT,
    Speler TEXT,
    Helft INT,
    Minuut INT,
    Goal TEXT, -- NULL, voor of tegen
    Wisselspeler TEXT, -- NULL of spelersnaam
    Kaart TEXT -- NULL, geel of rood
);

INSERT INTO voetbal_data
VALUES (
    'Eredivisie',
    '2024-2025',
    'FC Utrecht',
    'H1',
    'AZ Alkmaar',
    '24-03-2025',
    'Danny Makkelie',
    ''
)