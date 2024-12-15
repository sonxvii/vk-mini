import React from 'react';
import {
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SplitLayout,
  SplitCol,
  Epic,
  Tabbar,
  TabbarItem,
  View,
  Cell,
  Badge,
  Counter,
  List,
  Avatar,
  Footer,
  Div,
  Banner,
  Button,
  Image,
  FormItem,
  Input,
  Radio,
  FormLayoutGroup
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';
import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
  Icon56NewsfeedOutline,
  Icon12Lock
} from '@vkontakte/icons';
import { usePlatform } from '@vkontakte/vkui/dist/hooks/usePlatform';
import { useAdaptivityConditionalRender } from '@vkontakte/vkui/dist/hooks/useAdaptivityConditionalRender';

const EpicComponent = () => {
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
              <PanelHeader>Новости</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
              </Group>
              <Group>
                <List>
                  <Cell before={<Avatar />} subtitle="Веб-сайт">
                    Команда ВКонтакте
                  </Cell>
                  <Cell before={<Avatar />} subtitle="Музыкант">
                    Robbie Williams
                  </Cell>
                  <Cell before={<Avatar />} subtitle="Издательский дом">
                    ПостНаука
                  </Cell>
                </List>
                <Footer Component="div">3 сообщества</Footer>
              </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader>Сервисы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />} />
                <Div>
                  <Banner
                    before={
                      <Image
                        size={96}
                        src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
                      />
                    }
                    title="Баста в Ледовом"
                    subtitle="Большой концерт"
                    after="dismiss"
                    onDismiss={() => console.log("Banner dismissed")}
                    actions={<Button>Подробнее</Button>}
                  />
                </Div>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader>Сообщения</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />} />
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader>Клипы</PanelHeader>
              <Group>
                <FormLayoutGroup mode="vertical">
                  <FormItem top="Имя" htmlFor="name">
                    <Input id="name" type="text" placeholder="Семён" />
                  </FormItem>
                  <FormItem top="Откуда списать">
                    <Radio name="radio" value="1" description="Баланс 7 320 ₽" defaultChecked>
                      VK Pay
                    </Radio>
                    <Radio name="radio" value="2">
                      Mastercard **** 1234
                    </Radio>
                    <Radio
                      name="radio"
                      value="3"
                      description="Заблокирована"
                      disabled
                      titleAfter={<Icon12Lock />}
                    >
                      Visa **** 4321
                    </Radio>
                  </FormItem>
                  <FormItem>
                    <Button type="submit" size="l" stretched>
                      Продолжить
                    </Button>
                  </FormItem>
                </FormLayoutGroup>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader>Профиль</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />} />
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export const NewPanel = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>
        NewPanel
      </PanelHeader>
      <Group>
        <EpicComponent />
      </Group>
    </Panel>
  );
};

NewPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
