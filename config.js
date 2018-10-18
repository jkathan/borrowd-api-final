exports.DATABASE_URL = process.env.DATABASE_URL ||
                      "mongodb://localhost/borrowd"; 
exports.TEST_DATABASE_URL = 
	process.env.TEST_DATABASE_URL || "mongodb://localhost/test-borrowd-app";
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'banana';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:8080'