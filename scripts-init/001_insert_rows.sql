CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    salario NUMERIC(12,2) NOT NULL DEFAULT 0,
    idade INT NOT NULL
);

INSERT INTO usuarios (nome, salario, idade) VALUES
('Ana', 2500.00, 28),
('Bruno', 3200.50, 35),
('Carla', 4100.00, 42),
('Diego', 1800.75, 22),
('Eduarda', 2750.00, 30),
('Felipe', 5000.00, 40),
('Gabriela', 2950.50, 27),
('Henrique', 3600.00, 33),
('Isabela', 4200.00, 38),
('João', 2150.00, 25)
ON CONFLICT DO NOTHING;
