import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngxs/store";
import { BaseApiService } from "../base-api/base-api.service";
import { LoadingService } from "../loading/loading.service";
import { ToastService } from "../toast/toast.service";
import { PopularRoute } from "src/app/domains/home/types/popular-route.type";

@Injectable({ providedIn: "root" })
export class RouteService extends BaseApiService {
  constructor(
    protected http: HttpClient,
    protected store: Store,
    protected loadingService: LoadingService,
    protected toastService: ToastService
  ) {
    super(store, http, loadingService, toastService, "route");
  }

  public getPopularRoutes$(): Observable<PopularRoute[]> {
    // TODO: Replace by calling real API
    return this.http.get<PopularRoute[]>("https://mocki.io/v1/be8ed4c5-de67-4ef7-8c64-6ade52a01d0b");
  }
}