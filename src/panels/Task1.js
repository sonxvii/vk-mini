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
        <SplitLayout header={hasHeader && <PanelHeader delimiter="none" />} center>
          {viewWidth.tabletPlus && (
            <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>
              <Panel>
                {hasHeader && <PanelHeader />}
                <Group>
                  <Cell
                    disabled={activeStory === 'feed'}
                    style={activeStory === 'feed' ? activeStoryStyles : undefined}
                    data-story="feed"
                    onClick={onStoryChange}
                    before={<Icon28NewsfeedOutline />}
                  >
                    feed
                  </Cell>
                  <Cell
                    disabled={activeStory === 'services'}
                    style={activeStory === 'services' ? activeStoryStyles : undefined}
                    data-story="services"
                    onClick={onStoryChange}
                    before={<Icon28ServicesOutline />}
                  >
                    services
                  </Cell>
                  <Cell
                    disabled={activeStory === 'messages'}
                    style={activeStory === 'messages' ? activeStoryStyles : undefined}
                    data-story="messages"
                    onClick={onStoryChange}
                    before={<Icon28MessageOutline />}
                  >
                    messages
                  </Cell>
                  <Cell
                    disabled={activeStory === 'clips'}
                    style={activeStory === 'clips' ? activeStoryStyles : undefined}
                    data-story="clips"
                    onClick={onStoryChange}
                    before={<Icon28ClipOutline />}
                  >
                    clips
                  </Cell>
                  <Cell
                    disabled={activeStory === 'profile'}
                    style={activeStory === 'profile' ? activeStoryStyles : undefined}
                    data-story="profile"
                    onClick={onStoryChange}
                    before={<Icon28UserCircleOutline />}
                  >
                    profile
                  </Cell>
                </Group>
              </Panel>
            </SplitCol>
          )}
    
          <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
            <Epic
              activeStory={activeStory}
              tabbar={
                viewWidth.tabletMinus && (
                  <Tabbar className={viewWidth.tabletMinus.className}>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'feed'}
                      data-story="feed"
                      label="Новости"
                    >
                      <Icon28NewsfeedOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'services'}
                      data-story="services"
                      label="Сервисы"
                    >
                      <Icon28ServicesOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'messages'}
                      data-story="messages"
                      indicator={
                        <Counter size="s" mode="primary" appearance="accent-red">
                          12
                        </Counter>
                      }
                      label="Сообщения"
                    >
                      <Icon28MessageOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'clips'}
                      data-story="clips"
                      label="Клипы"
                    >
                      <Icon28ClipOutline />
                    </TabbarItem>
                    <TabbarItem
                      onClick={onStoryChange}
                      selected={activeStory === 'profile'}
                      data-story="profile"
                      indicator={<Badge mode="prominent">Есть обновления</Badge>}
                      label="Профиль"
                    >
                      <Icon28UserCircleOutline />
                    </TabbarItem>
                  </Tabbar>
                )
              }
            >
              <View id="feed" activePanel="feed">
                <Panel id="feed">
                  <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Новости</PanelHeader>
                  <Group style={{ height: '1000px' }}>
                    <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
                  </Group>
                </Panel>
              </View>
              <View id="services" activePanel="services">
                <Panel id="services">
                  <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сервисы</PanelHeader>
                  <Group style={{ height: '1000px' }}>
                    <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}></Placeholder>
                  </Group>
                </Panel>
              </View>
              <View id="messages" activePanel="messages">
                <Panel id="messages">
                  <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сообщения</PanelHeader>
                  <Group style={{ height: '1000px' }}>
                    <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>
                  </Group>
                </Panel>
              </View>
              <View id="clips" activePanel="clips">
                <Panel id="clips">
                  <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Клипы</PanelHeader>
                  <Group style={{ height: '1000px' }}>
                    <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>
                  </Group>
                </Panel>
              </View>
              <View id="profile" activePanel="profile">
                <Panel id="profile">
                  <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Профиль</PanelHeader>
                  <Group style={{ height: '1000px' }}>
                    <Placeholder
                      icon={<Icon28UserCircleOutline width={56} height={56} />}
                    ></Placeholder>
                  </Group>
                </Panel>
              </View>
            </Epic>
          </SplitCol>
        </SplitLayout>
      );
    };

Task1.propTypes = {
  id: PropTypes.string.isRequired,
};