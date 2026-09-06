// A simple keyword-based sentiment analysis function for demonstration.
export const getSentimentScore = (feeling: string): number => {
    if (!feeling) return 0;

    const lowerCaseFeeling = feeling.toLowerCase();
    
    const positiveKeywords = ['bahagia', 'tenang', 'senang', 'bersyukur', 'damai', 'bersemangat', 'gembira', 'optimis', 'puas'];
    const negativeKeywords = ['cemas', 'sedih', 'marah', 'lelah', 'khawatir', 'stres', 'kecewa', 'takut', 'frustrasi'];

    if (positiveKeywords.some(keyword => lowerCaseFeeling.includes(keyword))) {
        return 1; // Positive
    }

    if (negativeKeywords.some(keyword => lowerCaseFeeling.includes(keyword))) {
        return -1; // Negative
    }

    return 0; // Neutral
};
