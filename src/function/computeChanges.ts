function computeChanges(cached: string[], fetched: string[]) {
  const added: string[] = fetched.filter((id) => !cached.includes(id));
  const removed: string[] = cached.filter((id) => !fetched.includes(id));
  const cache: string[] = cached.filter((id) => !removed.includes(id));

  return { added, removed, cache };
}

export default computeChanges;
