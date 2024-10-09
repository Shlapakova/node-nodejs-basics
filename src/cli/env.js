const parseEnv = () => {
    const envVariebles = Object.entries(process.env)
    .filter(([key]) => key.startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');
    console.log(envVariebles);
};

parseEnv();