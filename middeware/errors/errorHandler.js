export default function errorHandler(err, req, res, next) {
    const statusCode = err.status ?? 500;
	const message = err.message || "Something went wrong.";

	// returns error status code and message
	return res.status(statusCode).json({
		error: statusCode,
		message: message
	})
}