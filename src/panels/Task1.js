import { Group, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import { Icon12Bomb } from '@vkontakte/icons';

export const Task1 = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();
  const [activeStory, setActiveStory] = React.useState('profile');
  const activeStoryStyles = {
    backgroundColor: 'var(--vkui--color_background_secondary)',
    borderRadius: 8,
  };
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const hasHeader = platform !== 'vkcom';

  return (
    <Panel id={id}>
    <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
      NewPanel
    </PanelHeader>
    <Group>
      text
    </Group>
  </Panel>
  );
    };

Task1.propTypes = {
  id: PropTypes.string.isRequired,
};
