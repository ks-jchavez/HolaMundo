export function buildUrlQueryParams(params: { [key: string]: string }): string {
  return Object.getOwnPropertyNames(params)
    .map((key, i) => `${i === 0 ? '?' : ''}${key}=${params[key]}`)
    .join('&');
}

export function hasTrailingSlash(pathname: string): boolean {
  return !!pathname && pathname.charAt(pathname.length - 1) === '/';
}

export function removeTrailingSlash(pathname: string): string {
  return hasTrailingSlash(pathname) ? pathname.slice(0, -1) : pathname;
}

export function getFileExtension(filename: string): string {
  const ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
}

/**
 * @deprecated Use getWorkflowFilterName instead.
 */
export function generateFilterName(workflowId: string): string {
  return getWorkflowFilterName(workflowId);
}

export function getWorkflowFilterName(workflowId: string): string {
  const filenameToUse = workflowId.replace(/-/g, '_').toLocaleLowerCase();
  const filterName = `workflow_filters_${filenameToUse}`;
  return filterName;
}
