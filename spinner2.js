const spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write(spin[i]);
    if (i === spin.length - 1) {
      process.stdout.write('\n');
    }
  }, (i * 200));
}
