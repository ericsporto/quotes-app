export const applyCpfMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const applyPhoneMask = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15);
};

export const applyCepMask = (value: string) => {
  if (!value) return '';
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 9);
};
export const applyNumberToReal = (value: string) => {
  if (!value) return '';

  const cleanValue = value.replace(/\D/g, '');

  const numericValue = (parseFloat(cleanValue) / 100).toFixed(2);

  return numericValue.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const formatCurrency = (value: string) => {
  const number = parseFloat(value.replace(',', '.'));
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
