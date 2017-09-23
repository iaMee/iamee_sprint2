export const getTotalStreak = (activities, isArray = true) => {
  const processedActivities = isArray
    ? activities
    : Object.keys(activities).map(activityKey => activities[activityKey]);

  console.log('PROCESSED ACTIVITIES', processedActivities);

  const totalStreak = processedActivities.reduce((acc, currentActivity) => {
    // only get entry which is completed
    acc += Object.keys(currentActivity.entries || {})
      .map(entryKey => currentActivity.entries[entryKey])
      .filter(entry => entry.complete).length;
    return acc;
  }, 0);

  return totalStreak;
};
