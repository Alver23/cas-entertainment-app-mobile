// Dependencies
import RNSensitiveInfo from 'react-native-sensitive-info';

// Models
import { IUserAuth } from '../../models/user-interface';

export class UserService {
  private readonly USER_KEY = 'user-info';

  public async getUserInfo(): Promise<IUserAuth> {
    const user = await RNSensitiveInfo.getItem(this.USER_KEY, {});
    return user ? JSON.parse(user) : undefined;
  }

  public async getToken(): Promise<string> {
    const { token } = (await this.getUserInfo()) || {};
    return token;
  }

  public async getRefreshToken(): Promise<string> {
    const { refreshToken } = (await this.getUserInfo()) || {};
    return refreshToken;
  }

  public setUserInfo(data: IUserAuth): Promise<string> {
    return RNSensitiveInfo.setItem(this.USER_KEY, JSON.stringify(data), {});
  }

  public clearUserInfo(): Promise<string> {
    return RNSensitiveInfo.deleteItem(this.USER_KEY, {});
  }
}

export const userService = new UserService();
