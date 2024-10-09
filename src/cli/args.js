const parseArgs = () => {
    const argPairs = process.argv.slice(2).filter((_, index) => index % 2 === 0)
        .map((arg, index) => {
            const value = process.argv.slice(2)[index * 2 + 1];
            return `${arg.replace('--','')} is ${value}`;
        }).join(', ');
        console.log(argPairs);
};

parseArgs();