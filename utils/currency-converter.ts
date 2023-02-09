export const convertNumberToCurrency = (
  locale: "en-US" | "en-NG",
  currency: "USD" | "NGN",
  number: number
) => {
  const CURRENCY_CONVERTER = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
  });

  return CURRENCY_CONVERTER.format(number);
};
