export async function handlelQuery(query, ...queryParams) {
    try {
        pool.query("BEGIN");
        const result = await query(...queryParams)
        pool.query("COMMIT");
        return { success: true, data: result }
    } catch (error) {
        pool.query("ROLLBACK");
        return { success: false, error: error.message }
    }
}