// Dependencies
import React, { ReactElement } from 'react';

// Hooks
import { useUserLocalSession } from '@hooks/user';

// eslint-disable-next-line react/display-name
const WithRoleAllowed = (Component, allowedRoles, AlternateView?) => (props): ReactElement => {
  const {
    user: { roles },
  } = useUserLocalSession();
  const hasPermission = React.useMemo(() => {
    return (
      roles.filter((role: string) => {
        return allowedRoles.some((allowedRole: string) => allowedRole === role);
      }).length > 0
    );
  }, [roles, allowedRoles]);

  if (!hasPermission) {
    return AlternateView ? <AlternateView /> : null;
  }

  return <Component {...props} />;
};

export default WithRoleAllowed;
