import { create, all } from 'mathjs';

const math = create(all);

export const solveLinear = (equation: string): string => {
  const match = equation.match(/([-+]?[\d.]+)?x\s*([+-]?\s*[\d.]+)?\s*=\s*0/);
  if (!match) throw new Error('Equação inválida');
  
  const a = parseFloat(match[1] || "1");
  const b = parseFloat(match[2].replace(/\s/g, '') || "0");

  const x = -b / a;
  return `x = ${x}`;
};

export const solveQuadratic = (equation: string): string => {
  const match = equation.match(/([-+]?[\d.]+)?x\^2\s*([-+]\s*[\d.]+)?x\s*([-+]\s*[\d.]+)?\s*=\s*0/);
  if (!match) throw new Error('Equação inválida');
  
  const a = parseFloat(match[1] || "1");
  const b = parseFloat(match[2].replace(/\s/g, '') || "0");
  const c = parseFloat(match[3].replace(/\s/g, '') || "0");

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) return 'Equação sem soluções reais';
  
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  
  return `x1 = ${x1}, x2 = ${x2}`;
};

// Função para resolver equação biquadrática (ax^4 + bx^2 + c = 0)
export const solveBiquadratic = (equation: string): string => {
  const match = equation.match(/([-+]?[\d.]+)?x\^4\s*([-+]\s*[\d.]+)?x\^2\s*([-+]\s*[\d.]+)?\s*=\s*0/);
  if (!match) throw new Error('Equação inválida');

  const a = parseFloat(match[1] || "1");
  const b = parseFloat(match[2].replace(/\s/g, '') || "0");
  const c = parseFloat(match[3].replace(/\s/g, '') || "0");

  // Tratando a equação biquadrática como uma equação quadrática em x^2
  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) return 'Equação sem soluções reais';

  const y1 = (-b + Math.sqrt(delta)) / (2 * a);
  const y2 = (-b - Math.sqrt(delta)) / (2 * a);

  // As soluções para x são as raízes quadradas de y1 e y2
  const x1 = Math.sqrt(y1);
  const x2 = -Math.sqrt(y1);
  const x3 = Math.sqrt(y2);
  const x4 = -Math.sqrt(y2);

  return `Soluções: x1 = ${x1}, x2 = ${x2}, x3 = ${x3}, x4 = ${x4}`;
};
