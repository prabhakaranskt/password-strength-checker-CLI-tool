export default function analyzePassword  (pw,weakPasswords)  {
    let score = 0;

  if (pw.length >= 8) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[\W_]/.test(pw)) score++;
  if (pw.length >= 12) score++;

  const isCommon = weakPasswords.includes(pw);

  const strength = isCommon
    ? 'Very Weak'
    : score <= 2
    ? 'Weak'
    : score === 3
    ? 'Medium'
    : 'Strong';

  return { score, isCommon, strength };

}

