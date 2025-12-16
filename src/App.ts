const fetchEphemeralKey = async () => {
  try {
    const res = await fetch('fafaa.crazy0ps.workers.dev', { // Your Worker URL
      method: 'POST',
    });
    const { ephemeralKey } = await res.json();
    if (ephemeralKey) {
      // Proceed to connect RealtimeSession with ephemeralKey
      await connect(ephemeralKey);
    }
  } catch (err) {
    setStatus('Failed to fetch key');
  }
};

// UI Button
<Button onClick={fetchEphemeralKey} disabled={isConnected}>
  Connect to Grok Companion
</Button>
