function sumSalary(salaries) {
  return Object.values(salaries).reduce(
    (aggregated, current) => {
      if (Number.isFinite(current)) {
        aggregated += current;
      }
      return aggregated;
    }
  , 0);
}
