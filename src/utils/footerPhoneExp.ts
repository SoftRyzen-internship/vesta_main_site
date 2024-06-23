export const sanitizePhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
  
    const formatted = cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3 $4 $5');
  
    return formatted;
  };