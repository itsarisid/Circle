import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { navItems } from '../sidebar/sidebar-data';
import { TranslateService } from '@ngx-translate/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription, filter } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppSettings } from 'src/app/config';

interface Notification {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  time: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface ProfileMenuItem {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

interface UserProfile {
  name: string;
  email: string;
  designation: string;
  avatar: string;
  lastLogin: string;
}

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;
  breadcrumbs: BreadcrumbItem[] = [];
  private routerSub: Subscription | null = null;

  @Output() optionsChange = new EventEmitter<AppSettings>();

  // Current User Profile
  currentUser: UserProfile = {
    name: 'Mathew Anderson',
    email: 'info@tailwindadmin.com',
    designation: 'Designer',
    avatar: '/assets/images/profile/user-1.jpg',
    lastLogin: 'Today at 9:30 AM'
  };

  // Profile Menu Items
  profileMenuItems: ProfileMenuItem[] = [
    {
      icon: 'solar:user-circle-line-duotone',
      title: 'My Profile',
      subtitle: 'Account Settings',
      link: '/profile'
    },
    {
      icon: 'solar:letter-line-duotone',
      title: 'My Inbox',
      subtitle: 'Messages & Email',
      link: '/inbox'
    },
    {
      icon: 'solar:checklist-minimalistic-line-duotone',
      title: 'My Tasks',
      subtitle: 'To-do and Daily Tasks',
      link: '/tasks'
    }

  ];

  constructor(
    private settings: CoreService,
    private vsidenav: CoreService,
    public dialog: MatDialog,
    private translate: TranslateService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.updateBreadcrumbs(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateBreadcrumbs(event.urlAfterRedirects);
        this.cdr.detectChanges();
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  private updateBreadcrumbs(url: string) {
    const segments = url.split('/').filter(s => s && !s.startsWith('?'));
    this.breadcrumbs = [];
    let currentUrl = '';

    for (const segment of segments) {
      currentUrl += '/' + segment;
      const label = this.formatLabel(segment);
      this.breadcrumbs.push({ label, url: currentUrl });
    }

    if (this.breadcrumbs.length === 0) {
      this.breadcrumbs.push({ label: 'Dashboard', url: '/' });
    }
  }

  private formatLabel(segment: string): string {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  options = this.settings.getOptions();

  private emitOptions() {
    this.optionsChange.emit(this.options);
  }

  setlightDark(theme: string) {
    this.options.theme = theme;
    this.emitOptions();
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAsRead(notification: Notification) {
    notification.read = true;
  }

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
  }

  getNotificationTypeColor(type: string): string {
    const colors: Record<string, string> = {
      'info': 'bg-blue-500',
      'success': 'bg-green-500',
      'warning': 'bg-yellow-500',
      'error': 'bg-red-500'
    };
    return colors[type] || 'bg-gray-500';
  }

  notifications: Notification[] = [
    {
      id: 1,
      img: '/assets/images/profile/user-1.jpg',
      title: 'Roman Joined the Team!',
      subtitle: 'Congratulate him on joining the development team',
      time: '2 min ago',
      type: 'success',
      read: false,
    },
    {
      id: 2,
      img: '/assets/images/profile/user-2.jpg',
      title: 'New message received',
      subtitle: 'Salma sent you a new message about the project',
      time: '15 min ago',
      type: 'info',
      read: false,
    },
    {
      id: 3,
      img: '/assets/images/profile/user-3.jpg',
      title: 'New Payment received',
      subtitle: 'Check your earnings - $250 credited',
      time: '1 hour ago',
      type: 'success',
      read: true,
    },
    {
      id: 4,
      img: '/assets/images/profile/user-4.jpg',
      title: 'Task deadline approaching',
      subtitle: 'Complete UI review before Friday',
      time: '3 hours ago',
      type: 'warning',
      read: false,
    },
    {
      id: 5,
      img: '/assets/images/profile/user-5.jpg',
      title: 'Server alert',
      subtitle: 'High CPU usage detected on production',
      time: '5 hours ago',
      type: 'error',
      read: true,
    },
  ];
}
