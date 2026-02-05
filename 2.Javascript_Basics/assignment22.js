const checkingForPermissions = (roles, checkRole, action) => {
    for (const i in roles) {
        if (i == checkRole) {
            if (roles[i].includes(action)) {
                return true;
            } else {
                return false;
            }
        }
    }
}


const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
const checkRole = "staff";
const action = "write";

console.log(checkingForPermissions(roles, checkRole, action));
