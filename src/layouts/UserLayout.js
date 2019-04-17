import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import DocumentTitle from 'react-document-title';
import styles from './UserLayout.less';
import getPageTitle from '@/utils/getPageTitle';

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 同济大学
  </Fragment>
);

class UserLayout extends Component {
  componentDidMount() {}

  render() {
    const {
      children,
      location: { pathname },
      breadcrumbNameMap,
    } = this.props;
    return (
      <DocumentTitle title={getPageTitle(pathname, breadcrumbNameMap)}>
        <div className={styles.container}>
          <div className={styles.lang} />
          <div className={styles.lang} />
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <span className={styles.title}>上海市民防工程风险评估管控系统</span>
                </Link>
              </div>
              <div className={styles.desc} />
            </div>
            {children}
          </div>
          <GlobalFooter copyright={copyright} />
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(({ menu: menuModel }) => ({
  menuData: menuModel.menuData,
  breadcrumbNameMap: menuModel.breadcrumbNameMap,
}))(UserLayout);
