// Models
import { IDictionary } from '@dictionary';

// Assets
import artistsPNG from '@assets/artists.png';
import groupsPNG from '@assets/groups.png';
import itinerariesPNG from '@assets/itineraries.png';
import studentsPNG from '@assets/students.png';
import teachersPNG from '@assets/teachers.png';
import usersPNG from '@assets/users.png';
import { IMenu, IMenuItem } from './models';

const imageMapper: IDictionary<string, object> = {
  artists: artistsPNG,
  groups: groupsPNG,
  itineraries: itinerariesPNG,
  students: studentsPNG,
  teachers: teachersPNG,
  users: usersPNG,
};

export const getMenuItems = (menus: IMenu[], translations: { [key: string]: string }): IMenuItem[] => {
  return menus.map(({ id, description, name, orden }) => {
    const route = name.toLowerCase();
    const menuName = translations[route];
    return {
      id,
      orden,
      route,
      description,
      name: menuName,
      image: imageMapper[route],
    };
  });
};
