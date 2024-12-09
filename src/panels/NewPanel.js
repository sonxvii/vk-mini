import { Group, Panel, PanelHeader, PanelHeaderBack, Placeholder } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import { Icon12Bomb } from '@vkontakte/icons';

export const NewPanel = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        NewPanel
      </PanelHeader>
      <Group>
        <Icon12Bomb width={40} height={40}/>
      </Group>
    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
