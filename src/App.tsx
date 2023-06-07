import avatar from './assets/Avatar.png';
import styles from './App.module.css';
import './global.css';

import './fonts.css';
import {
  UserCircle,
  CaretRight,
  Bell,
  Key,
  PersonArmsSpread,
  UserSwitch,
  Devices,
  Question,
  SignOut,
} from '@phosphor-icons/react';

export function Home() {
  const iconColor = '#751e53';

  const iconColorLogout = '#f672ed'

  return (
    <main>
      <div className={styles.wrapper}>
        <header>
          <div>
            <img src={avatar} alt='avatar' className={styles.avatarImg} />
          </div>
          <div>
            <h3 className={styles.avatarName}>Marvin McKinney</h3>
            <h4 className={styles.avatarEmail}>marvin.mckinney@example.com</h4>
          </div>
        </header>
        <hr />
        <div className={styles.account}>
          <p className={styles.accountSection}>CONTA</p>
          <div>
            <a className={styles.dataPersonal}>
              <UserCircle color={iconColor}  size={20}/> <p>Dados pessoais</p> <CaretRight size={20} color={iconColor} />
            </a>
          </div>
          <div className={styles.infoLogin}>
            <a>
              <Key size={20} color={iconColor} /> <p>Informações de login</p> <CaretRight size={20} color={iconColor} />
            </a>
          </div>
        </div>
        <div className={styles.preferences}>
          <p className={styles.preferencesSection}>PREFERÊNCIAS</p>
          <div className={styles.notification}>
            <a>
              <Bell size={20} color={iconColor} />
              <p>Notificações</p>
              <CaretRight size={20} color={iconColor} />
            </a>
          </div>
          <div className={styles.accessibility}>
            <a>
              <PersonArmsSpread size={20} color={iconColor} />
              <p>Acessibilidade</p>
              <CaretRight size={20} color={iconColor} />
            </a>
          </div>
          <div className={styles.privacy}>
            <p className={styles.privacySection}>PRIVACIDADE</p>
            <div className={styles.device}>
              <a>
                <Devices size={20} color={iconColor} /> <p>Aparelhos conectados</p> <CaretRight size={20} color={iconColor} />
              </a>
            </div>
            <div className={styles.linkedAccounts}>
              <a>
                <UserSwitch size={20} color={iconColor} /> <p>Contas vinculadas</p> <CaretRight size={20} color={iconColor} />
              </a>
            </div>
          </div>
          <hr />
          {/* others */}
          <div>
            <div className={styles.help}>
              <a>
                <Question size={20} color={iconColor} /> <p>Central de Ajuda</p>
              </a>
            </div>
            <div className={styles.logout}>
              <a><SignOut size={20} color={iconColorLogout} /><p>Sair</p></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
