import { StackNavigationProp } from '@react-navigation/stack';

type GalleryStackNavParamList = {
  GalleryHome: undefined;
  ImageDetails: undefined;
};

type GalleryScreenNavigationProp<T extends keyof GalleryStackNavParamList> = StackNavigationProp<
  GalleryStackNavParamList,
  T
>;

export type GalleryScreenNavigationProps = {
  navigation: GalleryScreenNavigationProp<'GalleryHome'>;
};
