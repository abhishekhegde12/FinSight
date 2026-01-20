import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appFormValidation]',
  standalone: true
})
export class FormValidationDirective {

  @Input() control: NgModel | null = null;

  private errorElement: any;
  private defaultErrorMessages: { [key: string]: string } = {
    'required': 'This field is required.',
    'minlength': 'Must be at least 6 characters.',
    'pattern': 'Please enter a valid email address.',
    'email': 'Please enter a valid email address.'
  };

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) {
    // Initialize the error element once
    this.errorElement = this.renderer.createElement('div');
    this.renderer.addClass(this.errorElement, 'validation-message');
  }

  // Listen for changes (blur and input) on the host element
  @HostListener('blur') @HostListener('input')
  onValidate() {
    if (this.control && this.control.invalid && (this.control.dirty || this.control.touched)) {
      this.displayErrors();
    } else {
      this.clearErrors();
    }
  }

  private displayErrors() {
    if (!this.control?.errors) {
      this.clearErrors();
      return;
    }

    const errorKeys = Object.keys(this.control.errors);
    const firstErrorKey = errorKeys[0];

    let errorMessage = this.defaultErrorMessages[firstErrorKey];
    
    // Check for minlength and provide specific message
    if (firstErrorKey === 'minlength' && this.control.errors['minlength']) {
      const requiredLength = this.control.errors['minlength'].requiredLength;
      errorMessage = `Password must be at least ${requiredLength} characters.`;
    }

    this.renderer.setProperty(this.errorElement, 'innerHTML', errorMessage);

    // Only append the error element if it's not already a sibling
    if (!this.errorElement.parentNode) {
      this.renderer.appendChild(this.el.nativeElement.parentNode, this.errorElement);
      this.renderer.addClass(this.el.nativeElement, 'is-invalid');
    }
  }

  private clearErrors() {
    if (this.errorElement.parentNode) {
      this.renderer.removeChild(this.el.nativeElement.parentNode, this.errorElement);
      this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
    }
  }
}