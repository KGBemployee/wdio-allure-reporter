export const PASSED = 'passed'
export const FAILED = 'failed'
export const BROKEN = 'broken'

export function getTestStatus (test, config) {
    let status = FAILED

    if (test.err.name) {
        status = test.err.name === 'AssertionError' ? FAILED : BROKEN
    } else {
        const stackTrace = test.err.stack.trim()
        status = stackTrace.toLowerCase().includes('err_assertion') || stackTrace.toLowerCase().includes('expected') ? FAILED : BROKEN
    }
    return status
}

export function isEmpty (object) {
    return !object || Object.keys(object).length === 0
}
