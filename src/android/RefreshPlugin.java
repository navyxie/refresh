package org.apache.cordova.plugin;

import android.view.Menu;
import android.view.MenuItem;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.CordovaWebView;

public class RefreshPlugin extends CordovaPlugin {

  @Override
  public Object onMessage(String id, Object data) {
    if (id.equals("onCreateOptionsMenu")) {
      Menu menu = (Menu) data;
      MenuInflater inflater = getMenuInflater();
      inflater.inflate(R.menu.refresh_menu, menu);
    } else if (id.equals("onOptionsItemSelected")) {
      MenuItem item = (MenuItem) data;
      if (item.getItemId() == R.id.refresh) {
        this.webView.reload();
      }
    }
    return null;
  }
}
