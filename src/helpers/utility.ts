export function getBrochureUrl(): string {
  // TODO: fetch the url from the server for the branch
  const url =
    "https://davberhampur.edu.in/wp-content/uploads/2024/03/Admissions-Open-2024%E2%80%932025.pdf";
  return url;
}

type Func = (...args: unknown[]) => void;

// Helper function for debouncing
export function debounce(func: Func, wait: number) {
  let timeout: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
